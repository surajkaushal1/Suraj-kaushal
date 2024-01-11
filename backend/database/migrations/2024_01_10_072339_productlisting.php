<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Productlisting extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_listing', function (Blueprint $table) {
            $table->id(); // Auto-incremental primary key
            $table->string('product_name'); // A string column
            $table->text('product_description')->nullable(); // A text column (nullable)
            $table->text('product_media'); 
            $table->decimal('product_price', 10, 2); // Assuming product price is a decimal with 10 total digits and 2 decimal places
            $table->decimal('product_compare_price', 10, 2); // Assuming compare price is a decimal with 10 total digits and 2 decimal places
            $table->text('product_tags')->nullable();
            $table->string('product_category'); // Assuming category is a string
            $table->string('product_sku')->nullable(); // Assuming SKU is a string (nullable)
            $table->string('product_meta_title')->nullable(); // Assuming meta title is a string (nullable)
            $table->text('product_meta_description')->nullable();
            $table->timestamps(); // Created_at and updated_at timestamps
        });        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_listing');
    }
}
