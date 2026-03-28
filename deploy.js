const Client = require('ssh2-sftp-client');
const { Client: SSHClient } = require('ssh2');

async function deploy() {
  const sftp = new Client();
  const config = {
    host: '178.128.46.9',
    username: 'skryyzo',
    password: 'Askryyzo1',
    port: 22
  };

  try {
    console.log('Connecting SFTP...');
    await sftp.connect(config);
    console.log('Connected. Uploading ZIP...');
    await sftp.put('D:\\Projects\\onestopbackend2.zip', '/home/master/applications/skryyzodqh/public_html/app.zip');
    console.log('Uploaded. Closing SFTP...');
    await sftp.end();

    console.log('Connecting SSH to unzip and setup...');
    const conn = new SSHClient();
    conn.on('ready', () => {
      console.log('SSH Ready');
      const script = `
        cd /home/master/applications/skryyzodqh/public_html &&
        unzip -o app.zip &&
        rm app.zip &&
        composer install --optimize-autoloader --no-dev &&
        cp .env.example .env &&
        sed -i 's/DB_CONNECTION=.*/DB_CONNECTION=mysql/g' .env &&
        sed -i 's/DB_DATABASE=.*/DB_DATABASE=skryyzodqh/g' .env &&
        sed -i 's/DB_USERNAME=.*/DB_USERNAME=skryyzodqh/g' .env &&
        sed -i 's/DB_PASSWORD=.*/DB_PASSWORD=fHX9kSx0dx/g' .env &&
        php artisan key:generate &&
        php artisan migrate --force &&
        php artisan storage:link
      `;
      conn.exec(script, (err, stream) => {
        if (err) throw err;
        stream.on('close', (code, signal) => {
          console.log('Setup complete with code: ' + code);
          conn.end();
        }).on('data', (data) => {
          console.log('STDOUT: ' + data);
        }).stderr.on('data', (data) => {
          console.error('STDERR: ' + data);
        });
      });
    }).connect(config);

  } catch (err) {
    console.error(err);
  }
}

deploy();
