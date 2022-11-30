<?php

namespace Database\Factories;
use App\Models\order;

use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = order::class;
    public function definition()
    {
        
        return [
            /*'initialdate'=> $this->faker->time('07/12/2020'),
            'quantity' => $this->faker->randomElement(2, 6),
            'goodUnits' => $this->faker->randomElement(2, 6),
            'scrap' => $this->faker->randomElement(2, 6)*/

            'initialdate'=> '07/12/2020',
            'quantity' => 12,
            'goodUnits' => 12,
            'scrap' => 12,
        ];
    }
}
