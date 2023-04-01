# FROM node:19.1.0

# RUN ["mkdir", "/api_devburger"]
# RUN ["mkdir", "/api_devburger/src"]
# RUN ["mkdir", "/api_devburger/uploads"]

# WORKDIR "/api_devburger"

# COPY ["./package.json","/api_devburger/"]

# COPY ["./nodemon.json","/api_devburger/"]
# COPY ["./.sequelizerc", "/api_devburger/"]




# RUN ["yarn"]

# COPY ["./src", "/api_devburger/src"]


# CMD ["yarn", "dev"]


FROM node:19.0

RUN ["mkdir", "devburger"]
RUN ["mkdir", "/devburger/src"]
RUN ["mkdir", "/devburger/uploads"]

WORKDIR "/devburger"

COPY ["./package.json", "nodemon.json", "/devburger/"]
COPY ["./.sequelizerc", "yarn.lock", "/devburger/"]
RUN ["yarn"]

COPY ["./src", "/devburger/src"]

CMD ["yarn", "dev"]
