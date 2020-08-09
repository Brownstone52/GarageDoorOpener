FROM balenalib/raspberry-pi-python

COPY . ./app
WORKDIR /app
RUN ./install.sh

CMD ["python", "webServer.py"]