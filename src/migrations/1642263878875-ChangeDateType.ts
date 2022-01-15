import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeDateType1642263878875 implements MigrationInterface {
  name = 'ChangeDateType1642263878875';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "startDate"`);
    await queryRunner.query(
      `ALTER TABLE "event" ADD "startDate" TIMESTAMP WITH TIME ZONE NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "endDate"`);
    await queryRunner.query(
      `ALTER TABLE "event" ADD "endDate" TIMESTAMP WITH TIME ZONE NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "endDate"`);
    await queryRunner.query(
      `ALTER TABLE "event" ADD "endDate" TIME WITH TIME ZONE NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "startDate"`);
    await queryRunner.query(
      `ALTER TABLE "event" ADD "startDate" TIME WITH TIME ZONE NOT NULL`,
    );
  }
}
