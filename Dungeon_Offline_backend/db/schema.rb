# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_20_110440) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "character_items", force: :cascade do |t|
    t.integer "character_id"
    t.integer "item_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.integer "level", default: 1
    t.integer "exp_next_level", default: 1000
    t.integer "exp", default: 0
    t.integer "max_hp", default: 1000
    t.integer "hp", default: 100
    t.integer "atk", default: 20
    t.integer "def", default: 20
    t.integer "x", default: 450
    t.integer "y", default: 550
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.string "effect"
    t.string "key"
    t.string "icon_name"
    t.integer "status", default: 0
    t.integer "rarity", default: 0
    t.integer "cooldown", default: 1000
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "monster_items", force: :cascade do |t|
    t.integer "monster_id"
    t.integer "item_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "monsters", force: :cascade do |t|
    t.string "name"
    t.string "monster_type"
    t.integer "level", default: 1
    t.integer "exp_provide", default: 100
    t.integer "max_hp", default: 1000
    t.integer "hp", default: 200
    t.integer "atk", default: 20
    t.integer "def", default: 20
    t.integer "x", default: 350
    t.integer "y", default: 350
    t.integer "population", default: 0
    t.integer "population_cap", default: 3
    t.integer "respawn_cooldown", default: 3000
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "world_characters", force: :cascade do |t|
    t.integer "character_id"
    t.integer "world_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "world_monsters", force: :cascade do |t|
    t.integer "monster_id"
    t.integer "world_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "worlds", force: :cascade do |t|
    t.string "name"
    t.integer "capacity", default: 5
    t.integer "current_user_count", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
