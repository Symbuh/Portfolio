"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220516053423 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220516053423 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("_id" serial primary key, "title" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
    }
    async down() {
        this.addSql('drop table if exists "post" cascade;');
    }
}
exports.Migration20220516053423 = Migration20220516053423;
//# sourceMappingURL=Migration20220516053423.js.map