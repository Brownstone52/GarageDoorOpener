echo "Updating system..."
apt-get update

echo "Installing python"
apt-get install python

echo "Installing python package manager"
apt-get install python-pip

echo "Resolving python dependencies"
pip install -r reqs.txt

echo "Installing GPIO library"
apt-get install rpi.gpio