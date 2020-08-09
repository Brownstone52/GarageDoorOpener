echo "Updating system..."
apt-get update

echo "Installing python"
apt-get install python

echo "Installing python package manager"
apt-get install python-pip

echo "Upgrading pip"
pip install --upgrade pip

echo "Installing python-dev"
apt-get install build-essential python-dev

echo "Resolving python dependencies"
pip install -r reqs.txt

if [ -z "$TEMPERATURE_FEATURE_FLAG" ]
then
    echo "TEMP feature disabled"
else
    echo "Installing git"
    apt-get install git

    echo "Cloning DHT library"
    git clone https://github.com/adafruit/Adafruit_Python_DHT.git

    echo "Installing DHT library"
    python Adafruit_Python_DHT/setup.py install --force-pi
fi