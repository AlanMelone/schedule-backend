import { MigrationInterface, QueryRunner } from 'typeorm';

export class ConnectPlaceAndEvents1642268426488 implements MigrationInterface {
  name = 'ConnectPlaceAndEvents1642268426488';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "event" ADD "placeId" integer`);
    await queryRunner.query(
      `ALTER TABLE "event" ADD CONSTRAINT "FK_48f8fdd484d8e24b6ec3c91f0f5" FOREIGN KEY ("placeId") REFERENCES "place"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "event" DROP CONSTRAINT "FK_48f8fdd484d8e24b6ec3c91f0f5"`,
    );
    await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "placeId"`);
  }
}
