import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeEventGroupRelation1639167194798 implements MigrationInterface {
    name = 'ChangeEventGroupRelation1639167194798'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_2bc7ca719bebcdc9d8a0d04f8ab"`);
        await queryRunner.query(`CREATE TABLE "event_groups_group" ("eventId" integer NOT NULL, "groupId" integer NOT NULL, CONSTRAINT "PK_5eb9540f7d4be5a3f31775a9380" PRIMARY KEY ("eventId", "groupId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7da98183ab5c393e83badea706" ON "event_groups_group" ("eventId") `);
        await queryRunner.query(`CREATE INDEX "IDX_632d06b78600e438191d861756" ON "event_groups_group" ("groupId") `);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "groupsId"`);
        await queryRunner.query(`ALTER TABLE "place" ALTER COLUMN "location" TYPE geography(point)`);
        await queryRunner.query(`ALTER TABLE "event_groups_group" ADD CONSTRAINT "FK_7da98183ab5c393e83badea7061" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "event_groups_group" ADD CONSTRAINT "FK_632d06b78600e438191d861756b" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event_groups_group" DROP CONSTRAINT "FK_632d06b78600e438191d861756b"`);
        await queryRunner.query(`ALTER TABLE "event_groups_group" DROP CONSTRAINT "FK_7da98183ab5c393e83badea7061"`);
        await queryRunner.query(`ALTER TABLE "place" ALTER COLUMN "location" TYPE geography(Point,4326)`);
        await queryRunner.query(`ALTER TABLE "event" ADD "groupsId" integer`);
        await queryRunner.query(`DROP INDEX "public"."IDX_632d06b78600e438191d861756"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7da98183ab5c393e83badea706"`);
        await queryRunner.query(`DROP TABLE "event_groups_group"`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_2bc7ca719bebcdc9d8a0d04f8ab" FOREIGN KEY ("groupsId") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
