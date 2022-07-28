import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1658976487223 implements MigrationInterface {
    name = 'InitialMigration1658976487223'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "books" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying, "author_id" uuid NOT NULL, CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "authors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_1056dbee4616479f7d562c562df" FOREIGN KEY ("author_id") REFERENCES "authors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_1056dbee4616479f7d562c562df"`);
        await queryRunner.query(`DROP TABLE "authors"`);
        await queryRunner.query(`DROP TABLE "books"`);
    }

}
