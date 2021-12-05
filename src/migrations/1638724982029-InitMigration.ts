import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitMigration1638724982029 implements MigrationInterface {
  name = 'InitMigration1638724982029';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "lector" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_338935b8250ec30a2d4523c0639" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "group" ("id" SERIAL NOT NULL, "number" character varying NOT NULL, CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "event" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying, "remoteLink" character varying, "startDate" TIME WITH TIME ZONE NOT NULL, "endDate" TIME WITH TIME ZONE NOT NULL, "type" integer NOT NULL DEFAULT '0', "lectorId" integer, "groupsId" integer, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "place" ("id" SERIAL NOT NULL, "location" geography(point) NOT NULL, "address" character varying NOT NULL, "auditorium" character varying, CONSTRAINT "PK_96ab91d43aa89c5de1b59ee7cca" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "event" ADD CONSTRAINT "FK_788a1306e2baf0bf6baec35be75" FOREIGN KEY ("lectorId") REFERENCES "lector"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "event" ADD CONSTRAINT "FK_2bc7ca719bebcdc9d8a0d04f8ab" FOREIGN KEY ("groupsId") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "event" DROP CONSTRAINT "FK_2bc7ca719bebcdc9d8a0d04f8ab"`,
    );
    await queryRunner.query(
      `ALTER TABLE "event" DROP CONSTRAINT "FK_788a1306e2baf0bf6baec35be75"`,
    );
    await queryRunner.query(`DROP TABLE "place"`);
    await queryRunner.query(`DROP TABLE "event"`);
    await queryRunner.query(`DROP TABLE "group"`);
    await queryRunner.query(`DROP TABLE "lector"`);
  }
}
