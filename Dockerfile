FROM elixir:1.10.3

RUN curl -o- https://nodejs.org/download/release/v11.9.0/node-v11.9.0-linux-x64.tar.gz | tar -xz && \
    mv node-v11.9.0-linux-x64 /opt/node && \
    chmod +x /opt/node/bin/* && \
    echo "export PATH=\$PATH:/opt/node/bin" >> /root/.bashrc

WORKDIR /app

COPY . .
RUN chmod +x entrypoint.sh

CMD ./entrypoint.sh
