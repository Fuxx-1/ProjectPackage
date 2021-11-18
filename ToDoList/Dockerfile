FROM ascdc/jdk8
LABEL MAINTAINER "Fuxx@Github.com"
CMD mkdir -p /software/java/log
ADD index.jar /software/java/index.jar
WORKDIR /software/java
CMD java -jar index.jar > /software/java/log/index.log
