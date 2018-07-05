<?php

use Illuminate\Database\Seeder;

class ContentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    $faker = Faker\Factory::create();
      foreach (range(1,5) as $index) {
          $title = $faker->catchPhrase;

        DB::table('contents')->insert([
            'author_id' => App\User::all()->random()->id,
            'category_id' => TCG\Voyager\Models\Category::all()->random()->id,
            'title' => $title,
            'excerpt' => $faker->text,
            'body' => $faker->paragraph,
            'image' => 'contents\July2018\Uy1ASGTaW3fiwcgPsMxg.jpg',
            'slug' => str_slug($title, '-'),
            'status' => 'DRAFT',
            'featured' => 0,
            'created_at' => $faker->dateTime($max = 'now'),
            'updated_at' => $faker->dateTime($max = 'now'),
        ]);
      }
    }
}