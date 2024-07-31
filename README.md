## Steps To Reproduce the issue

- run `docker-compose up --build`
- connect to the docker image shell by running `docker exec -it $(docker ps | grep mikro-orm-enitities-issue-service | awk '{print $1}') /bin/sh`
- run the seed command inside the container `npx mikro-orm seeder:run`
- returns the following error
  ![Screenshot 2024-08-01 at 01 15 17](https://github.com/user-attachments/assets/4785aff3-b4a7-43e2-9b5b-26f3bdbaac88)

```
MetadataError: Only abstract entities were discovered, maybe you forgot to use @Entity() decorator?
```
