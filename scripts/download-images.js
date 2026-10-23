const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
  {
    name: 'hero_surf.jpg',
    url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1600&q=80' // Surfer walking with board at golden coast
  },
  {
    name: 'lesson_first_wave.jpg',
    url: 'https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?auto=format&fit=crop&w=1000&q=80' // Beginner paddling soft-top
  },
  {
    name: 'lesson_private.jpg',
    url: 'https://images.unsplash.com/photo-1455729552865-3658a5d39692?auto=format&fit=crop&w=1000&q=80' // 1-on-1 coaching focus & wave
  },
  {
    name: 'lesson_group.jpg',
    url: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=1000&q=80' // Friends walking with boards
  },
  {
    name: 'why_us_split.jpg',
    url: 'https://images.unsplash.com/photo-1415931633537-351070d20b81?auto=format&fit=crop&w=1000&q=80' // Ocean swell & coastal landscape
  },
  {
    name: 'instructor_wayan.jpg',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80' // Warm portrait
  },
  {
    name: 'instructor_sarah.jpg',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80' // Authentic portrait
  },
  {
    name: 'instructor_ketut.jpg',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80' // Senior coach portrait
  },
  {
    name: 'gallery_1.jpg',
    url: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1000&q=80' // Clean wave action
  },
  {
    name: 'gallery_2.jpg',
    url: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&w=1000&q=80' // Surfboard on sand & morning tide
  },
  {
    name: 'gallery_3.jpg',
    url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80' // Golden ocean mist
  },
  {
    name: 'gallery_4.jpg',
    url: 'https://images.unsplash.com/photo-1537519646099-335112f03225?auto=format&fit=crop&w=1000&q=80' // Beach vibe after session
  }
];

const destDir = path.join(__dirname, '..', 'assets', 'images');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function downloadImage(img) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(destDir, img.name);
    const file = fs.createWriteStream(filePath);
    
    https.get(img.url, (response) => {
      // Follow redirects if any
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (redirectRes) => {
          redirectRes.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${img.name}`);
            resolve();
          });
        }).on('error', (err) => {
          fs.unlink(filePath, () => {});
          reject(err);
        });
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded ${img.name}`);
          resolve();
        });
      }
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const img of images) {
    try {
      await downloadImage(img);
    } catch (err) {
      console.error(`Error downloading ${img.name}:`, err.message);
    }
  }
  console.log('Finished downloading images');
}

run();
