# Build and deploy

Just a rough sketch.

Secrets should be via some secret store.

Modify the scripts to take parameters instead.

## Working on linux

```
# sudo snap install powershell --classic
# make executable
# chmod +x <filename.ps1>
```

## install umbraco

// TODO: baseline install, should be just unattended install

or make a container. 

Using nginx as proxy to kestral.

I have not scripted this yet.  not too bothered.

```
#!/bin/bash

service=umbraco.bed
user=umbraco.bed.local
workingdir=/foo/bar/baz

# check exists
if id "$user" &>/dev/null; then
    echo 'found user $user'
else
    echo "creating user $user"
    sudo useradd $user
fi

# set rwx for user
#sudo chown -R $user $workingdir
#sudo chmod -R u+rwx $workingdir

# install service to systemd systemctl
echo "copy service definition"
sudo cp $service.service /etc/systemd/system/
# install site to nginx
sudo cp $service.conf /etc/nginx/conf.d/

# start the service
echo "starting service"
sudo systemctl daemon-reload
sudo systemctl enable $service
sudo systemctl start $service.service
sudo systemctl status $service.service

```

and also the `.conf` and `.service` files.

## publish-umbraco.ps1

`pwsh publish-umbraco.ps1`

Basically just `dotnet publish`.

Publish the poject into an artifact directory.

Consider using the `msbuild` `Directory.Build.props` to customise build if required.

## sync-settings.ps1

`pwsh sync-settings.ps1`

Use the uSync cli to push what is on disk into umbraco.

## sync-content.ps1

`pwsh sync-content.ps1`

Use the uSync cli to push what is on disk into umbraco.