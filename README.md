# Describe

This is the repository about my project package (normally packaged by docker).

# Docker assembly install

## Docker Install

From [链接](https://www.runoob.com/docker/ubuntu-docker-install.html)

### Automatic installation using official installation script

#### The installation commands are as follows

```shell
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

#### You can also use the domestic `daocloud` one click installation command

```shell
curl -sSL https://get.daocloud.io/docker | sh
```

#### Test installation

```shell
docker -v
```

## docker compose Install

### Automatic installation using official installation script

#### Run the following command to download the current stable version of docker compose

```shell
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

#### Apply executable permissions to binaries

```shell
sudo chmod +x /usr/local/bin/docker-compose
```

#### Test installation

```shell
docker-compose --version
```

