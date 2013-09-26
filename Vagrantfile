# -*- mode: ruby -*-
# vi: set ft=ruby :



# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.box = "spore-1-3"

  # The url from where the 'config.vm.box' box will be fetched if it
  # doesn't already exist on the user's system.
  config.vm.box_url = "http://artifacts.genslerwi.com/vagrant/spore-1-3.box"
  
  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine.
  config.vm.network :forwarded_port, guest: 8004, host: 8004
  
  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network :private_network, ip: "192.168.33.10"
  
  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network :public_network
  

  # Create a copy of the RSA keys from a windows machine to the vm. 
  # forwarding the agent doesn't seem to work on windows. 
  config.vm.synced_folder "C:/Program Files (x86)/Git/.ssh/", "/home/vagrant/.sshHost"

  # If true, then any SSH connections made will enable agent forwarding.
  # Default value: false
  config.ssh.forward_agent = true

  $installHostSSH = <<SCRIPT
    cp /home/vagrant/.sshHost/id_rsa* /home/vagrant/.ssh/ 
    chmod 600 /home/vagrant/.ssh/id_rsa*
    sudo chown vagrant:vagrant /home/vagrant/.ssh/id_rsa*
SCRIPT

  config.vm.provision :shell,
   :inline => $installHostSSH

  # Shell provisioning part 2:
  # - runs node init and starts project
  $startNodejsProject = <<SCRIPT
    cd /vagrant
    ./init.sh
    supervisor server.js &
SCRIPT

  config.vm.provision :shell, 
    :inline => $startNodejsProject
  
  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"
  
  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider :virtualbox do |vb|
    # Use VBoxManage to customize the VM. For example to change memory:
    vb.customize ["modifyvm", :id, "--memory", "4096"]
  end
end
                                                            
