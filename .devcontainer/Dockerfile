# Update the VARIANT arg in docker-compose.yml to pick an Elixir version: 1.9, 1.10, 1.10.4
ARG VARIANT=latest
FROM elixir:${VARIANT}

# This Dockerfile adds a non-root user with sudo access. Update the “remoteUser” property in
# devcontainer.json to use it. More info: https://aka.ms/vscode-remote/containers/non-root-user.
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Options for common package install script
ARG INSTALL_ZSH="true"
ARG UPGRADE_PACKAGES="true"
ARG COMMON_SCRIPT_SOURCE="https://raw.githubusercontent.com/microsoft/vscode-dev-containers/v0.177.0/script-library/common-debian.sh"
ARG COMMON_SCRIPT_SHA="b9a71d258921a0ac47dfcf551f8fde87e18d7d5844a10dd018d81587b2569f0b"

# Optional Settings for Phoenix
ARG PHOENIX_VERSION="1.5.4"

# Settings for installing Node.js.
ARG NODE_SCRIPT_SOURCE="https://raw.githubusercontent.com/microsoft/vscode-dev-containers/master/script-library/node-debian.sh"
ARG NODE_SCRIPT_SHA="dev-mode"
ARG NODE_VERSION="lts/*"
ENV NVM_DIR=/usr/local/share/nvm
ENV NVM_SYMLINK_CURRENT=true
ENV PATH=${NVM_DIR}/current/bin:${PATH}

# Install needed packages and setup non-root user. Use a separate RUN statement to add your own dependencies.
RUN apt-get update \
  && export DEBIAN_FRONTEND=noninteractive \
  && apt-get -y install --no-install-recommends curl ca-certificates 2>&1 \
  && curl -sSL ${COMMON_SCRIPT_SOURCE} -o /tmp/common-setup.sh \
  && ([ "${COMMON_SCRIPT_SHA}" = "dev-mode" ] || (echo "${COMMON_SCRIPT_SHA} */tmp/common-setup.sh" | sha256sum -c -)) \
  && /bin/bash /tmp/common-setup.sh "${INSTALL_ZSH}" "${USERNAME}" "${USER_UID}" "${USER_GID}" "${UPGRADE_PACKAGES}" \
  #
  # Install Node.js for use with web applications
  && curl -sSL ${NODE_SCRIPT_SOURCE} -o /tmp/node-setup.sh \
  && ([ "${NODE_SCRIPT_SHA}" = "dev-mode" ] || (echo "${COMMON_SCRIPT_SHA} */tmp/node-setup.sh" | sha256sum -c -)) \
  && /bin/bash /tmp/node-setup.sh "${NVM_DIR}" "${NODE_VERSION}" "${USERNAME}" \
  #
  # Install dependencies
  && apt-get install -y build-essential \
  && apt install -y ruby-full \
  && gem install fakes3 \
  #
  # Clean up
  && apt-get autoremove -y \
  && apt-get clean -y \
  && rm -rf /var/lib/apt/lists/* /tmp/common-setup.sh /tmp/node-setup.sh

RUN su ${USERNAME} -c "mix local.hex --force \
  && mix local.rebar --force \
  && mix archive.install --force hex phx_new ${PHOENIX_VERSION}"

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update \
#     && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install additional package.
# RUN  mix ...
