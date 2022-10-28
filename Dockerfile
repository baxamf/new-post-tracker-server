# FROM node:latest

# WORKDIR /server

# COPY package*.json ./

# RUN npm install

# COPY . .

# CMD ["npm", "run", "dev"]

FROM node:lts AS development

WORKDIR /code

COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm ci


COPY . /code

EXPOSE 5000

CMD [ "npm", "run", "dev" ]

# FROM development as dev-envs
# RUN <<EOF
# apt-get update
# apt-get install -y --no-install-recommends git
# EOF

# RUN <<EOF
# useradd -s /bin/bash -m vscode
# groupadd docker
# usermod -aG docker vscode
# EOF
# # install Docker tools (cli, buildx, compose)
# COPY --from=gloursdocker/docker / /
# CMD [ "npm", "run", "dev" ]
