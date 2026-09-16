// TASK 1 — FakeStore API Operations
var apiLink = "https://fakestoreapi.com/products";

function task1() {

    fetch(apiLink)
        .then(function(response) {
            return response.json();
        })
        .then(function(products) {

            console.log("\n========== TASK 1 ==========");

            // Display all products
            products.forEach(function(product) {
                console.log(
                    `Title: ${product.title}
Price: $${product.price}
Category: ${product.category}
-------------------------`
                );
            });

            // map()
            var productDetails = products.map(function(product) {
                return {
                    title: product.title,
                    price: product.price
                };
            });

            console.log("MAP RESULT:");
            console.log(productDetails);

            // filter()
            var expensiveProducts = products.filter(function(product) {
                return product.price > 100;
            });

            console.log("\nProducts Above $100:");
            console.log(expensiveProducts);

            // find()
            var electronicsProduct = products.find(function(product) {
                return product.category === "electronics";
            });

            console.log("\nFirst Electronics Product:");
            console.log(electronicsProduct);

            // reduce()
            var totalPrice = products.reduce(function(total, product) {
                return total + product.price;
            }, 0);

            console.log(
                `\nTotal Price: $${totalPrice.toFixed(2)}`
            );

            // sort()
            var sortedProducts = [...products].sort(function(a, b) {
                return b.price - a.price;
            });

            console.log("\nHighest → Lowest:");

            sortedProducts.forEach(function(product) {
                console.log(
                    `${product.title} - $${product.price}`
                );
            });

        })
        .catch(function(error) {
            console.log("Task 1 API Error:", error);
        })
        .finally(function() {
            console.log("Task 1 Completed");
        });
}


// =====================================================
// TASK 2 — Product Category Dashboard
// =====================================================

function task2() {

    fetch(apiLink)
        .then(function(response) {
            return response.json();
        })
        .then(function(products) {

            var electronics = products.filter(function(product) {
                return product.category === "electronics";
            });

            var jewelery = products.filter(function(product) {
                return product.category === "jewelery";
            });

            var mensClothing = products.filter(function(product) {
                return product.category === "men's clothing";
            });

            var womensClothing = products.filter(function(product) {
                return product.category === "women's clothing";
            });

            var prices = products.map(function(product) {
                return product.price;
            });

            var total = prices.reduce(function(sum, price) {
                return sum + price;
            }, 0);

            var sortedPrices = [...prices].sort(function(a, b) {
                return b - a;
            });

            var highestPrice = sortedPrices[0];

            var lowestPrice =
                sortedPrices[sortedPrices.length - 1];

            var averagePrice = total / products.length;

            console.log(`
========== TASK 2 ==========
===== PRODUCT DASHBOARD =====

Total Products: ${products.length}

Electronics: ${electronics.length}
Jewelery: ${jewelery.length}
Men's Clothing: ${mensClothing.length}
Women's Clothing: ${womensClothing.length}

Highest Price: $${highestPrice}
Lowest Price: $${lowestPrice}
Average Price: $${averagePrice.toFixed(2)}
`);

        })
        .catch(function(error) {
            console.log("Task 2 API Error:", error);
        })
        .finally(function() {
            console.log("Task 2 Completed");
        });
}


// =====================================================
// TASK 3 — User & Post API
// =====================================================

var usersApi =
    "https://jsonplaceholder.typicode.com/users";

var postsApi =
    "https://jsonplaceholder.typicode.com/posts";

function task3() {

    fetch(usersApi)

        .then(function(response) {
            return response.json();
        })

        .then(function(users) {

            console.log("\n========== TASK 3 ==========");

            // Display all names
            console.log("\nAll User Names:");

            users.forEach(function(user) {
                console.log(user.name);
            });

            // Name + email
            console.log("\nUser Name + Email:");

            users.forEach(function(user) {
                console.log(
                    `${user.name} - ${user.email}`
                );
            });

            // Find ID 5
            var userFive = users.find(function(user) {
                return user.id === 5;
            });

            console.log("\nUser ID 5:");
            console.log(userFive);

            // Filter city
            var cityUsers = users.filter(function(user) {
                return user.address.city === "South Christy";
            });

            console.log("\nUsers from South Christy:");
            console.log(cityUsers);

            // Fetch posts
            return fetch(postsApi);
        })

        .then(function(response) {
            return response.json();
        })

        .then(function(posts) {

            // Posts by user ID 1
            var userOnePosts = posts.filter(function(post) {
                return post.userId === 1;
            });

            console.log("\nPosts by User ID 1:");

            userOnePosts.forEach(function(post) {
                console.log(post.title);
            });

            // Count
            console.log(
                `User ID 1 Post Count: ${userOnePosts.length}`
            );

            // Title > 50 characters
            var longTitlePost = posts.find(function(post) {
                return post.title.length > 50;
            });

            console.log(
                "\nFirst Post with Title > 50 Characters:"
            );

            console.log(longTitlePost);

        })

        .catch(function(error) {
            console.log("Task 3 API Error:", error);
        })

        .finally(function() {
            console.log("Task 3 Completed");
        });
}


// =====================================================
// TASK 4 — API + SEARCH
// =====================================================

function task4() {

    var category = prompt("Enter product category:");

    var maximumPrice =
        Number(prompt("Enter maximum price:"));

    fetch(apiLink)

        .then(function(response) {
            return response.json();
        })

        .then(function(products) {

            var result = products.filter(function(product) {

                return (
                    product.category.toLowerCase() ===
                    category.toLowerCase()
                    &&
                    product.price <= maximumPrice
                );

            });

            console.log("\n========== TASK 4 ==========");
            console.log("===== SEARCH RESULTS =====");

            if (result.length === 0) {

                console.log("No products found.");

            } else {

                result.forEach(function(product) {

                    console.log(`
Product: ${product.title}
Price: $${product.price}
Category: ${product.category}
-------------------------`);

                });
            }

        })

        .catch(function(error) {
            console.log("Task 4 API Error:", error);
        })

        .finally(function() {
            console.log("Task 4 Completed");
        });
}


// =====================================================
// TASK 5 — SHOPPING CART
// =====================================================

function task5() {

    var cart = [];

    fetch(apiLink)

        .then(function(response) {
            return response.json();
        })

        .then(function(products) {

            console.log("\n========== TASK 5 ==========");
            console.log("===== AVAILABLE PRODUCTS =====");

            products.forEach(function(product) {

                console.log(
                    `ID: ${product.id} | ${product.title} | $${product.price}`
                );

            });

            var selectedIds = prompt(
                "Enter product IDs separated by comma:\nExample: 1,3,5"
            );

            var ids = selectedIds.split(",").map(function(id) {
                return Number(id.trim());
            });

            // Add products to cart
            ids.forEach(function(id) {

                var product = products.find(function(product) {
                    return product.id === id;
                });

                if (product) {
                    cart.push(product);
                }

            });

            console.log("\n===== CART =====");

            cart.forEach(function(product, index) {

                console.log(`
Product ${index + 1}: ${product.title}
Price: $${product.price}
`);

            });

            // Total
            var total = cart.reduce(function(sum, product) {
                return sum + product.price;
            }, 0);

            var discount = 0;

            if (total > 200) {

                discount = 20;

            } else if (total > 100) {

                discount = 10;

            }

            var discountAmount =
                total * discount / 100;

            var finalAmount =
                total - discountAmount;

            console.log(`
===== CART SUMMARY =====

Total: $${total.toFixed(2)}
Discount: ${discount}%
Discount Amount: $${discountAmount.toFixed(2)}
Final Amount: $${finalAmount.toFixed(2)}
`);

        })

        .catch(function(error) {
            console.log("Task 5 API Error:", error);
        })

        .finally(function() {
            console.log("Task 5 Completed");
        });
}


// =====================================================
// TASK 6 — COMPLETE PRODUCT REPORT
// =====================================================

function task6() {

    fetch(apiLink)

        .then(function(response) {
            return response.json();
        })

        .then(function(products) {

            console.log("\n========== TASK 6 ==========");
            console.log("========== PRODUCT REPORT ==========");

            // Total products
            console.log(
                `\nTotal Products: ${products.length}`
            );


            // forEach()
            console.log("\nProduct Names:");

            products.forEach(function(product) {
                console.log("- " + product.title);
            });


            // map()
            var productNames = products.map(function(product) {
                return product.title;
            });

            console.log("\nProduct Names Array:");
            console.log(productNames);


            // filter()
            var expensiveProducts = products.filter(function(product) {
                return product.price > 100;
            });

            console.log("\nProducts Above $100:");

            expensiveProducts.forEach(function(product) {

                console.log(
                    `${product.title} - $${product.price}`
                );

            });


            // find()
            var electronicsProduct = products.find(function(product) {
                return product.category === "electronics";
            });

            console.log("\nElectronics Product:");

            console.log(
                `${electronicsProduct.title} - $${electronicsProduct.price}`
            );


            // reduce()
            var totalPrice = products.reduce(function(total, product) {
                return total + product.price;
            }, 0);

            console.log(
                `\nTotal Product Value: $${totalPrice.toFixed(2)}`
            );


            // some()
            var above500 = products.some(function(product) {
                return product.price > 500;
            });

            console.log(
                `Any Product Above $500: ${above500}`
            );


            // every()
            var allAbove1 = products.every(function(product) {
                return product.price > 1;
            });

            console.log(
                `All Products Above $1: ${allAbove1}`
            );


            // sort()
            var sortedProducts =
                [...products].sort(function(a, b) {
                    return b.price - a.price;
                });

            console.log("\nHighest → Lowest:");

            sortedProducts.forEach(function(product) {

                console.log(
                    `${product.title} - $${product.price}`
                );

            });

            console.log(
                "\n========== REPORT COMPLETE =========="
            );

        })

        .catch(function(error) {

            console.log("Task 6 API Error:", error);

        })

        .finally(function() {

            console.log("Task 6 Completed");

        });
}


// =====================================================
// RUN ALL TASKS
// =====================================================

task1();
task2();
task3();
task4();
task5();
task6();