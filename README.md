# REDES2_2S2020_Practica1_201504420

## Configuración para las EC2

```bash
#!/bin/bash
sudo apt-get update
sudo apt-get install apache2 -y
sudo apt-get update
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
export NVM_DIR="$HOME/.nvm" 
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
nvm install 14.15.0
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn -y
git clone https://github.com/NeftXx/REDES2_2S2020_Practica1_201504420.git redes2
cd redes2/web
git checkout page2
yarn install
yarn run build
sudo mv build /var/www
cd /var/www
sudo rm -rf html
sudo mv build html
```
