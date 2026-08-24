FROM eclipse-temurin:21-jdk AS build

WORKDIR /app

COPY . .

RUN java -version
RUN javac -version
RUN ./mvnw -version

RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:21-jre

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]