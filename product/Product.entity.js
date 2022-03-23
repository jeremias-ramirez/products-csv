class Product {

    static availabilityValues = {
        "IN_STOCK": "in stock",
        "OUT_OF_STOCK": "out of stock",
        "AVAILABLE_FOR_ORDER": "available for order"
    };

    static conditionValues = {
        "NEW": "new",
        "REFURBISHED": "refurbished",
        "USED": "used"
    };

    static ageGroupValues = {
        "ADULT": "adult",
        "ALL_AGES": "all ages",
        "TEEN": "teen",
        "KIDS": "kids",
        "TODDLER": "toddler",
        "INFANT": "infant",
        "NEWBORN": "newborn"
    };
    static genderValues = {
        FEMALE: "female",
        MALE: "male",
        UNISEX: "unisex"
    };
    /**
     * @param {String} id
     * @param {String} tittle
     * @param {Number} price
     * @param {String} link
     * @param {String} imageLink
     * @param {String} brand
     */
    constructor(id, title, price, description, link, imageLink, brand) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._price = price;
        this._link = link;
        this._imageLink = imageLink;
        this._brand = brand;
        this._availability = Product.availabilityValues.IN_STOCK;
        this._condition = Product.conditionValues.NEW;
    }

    /**
     * @param {Number} googleProductCategory
     */
    set googleProductCategory(googleProductCategory) {
        this.googleProductCategory = googleProductCategory;
    }

    /**
     * @param {Number} fbProductCategory
     */
    set fbProductCategory(fbProductCategory) {
        this._fbProductCategory = fbProductCategory;
    }

    /**
     * @param {Number} quantityToSellOnFacebook
     */
    set quantityToSellOnFacebook(quantityToSellOnFacebook) {
        this._quantityToSellOnFacebook = quantityToSellOnFacebook;
    }

    /**
     * @param {Number} salePrice
     */
    set salePrice(salePrice) {
        this._salePrice = salePrice;
    }

    /**
     * @param {String} salePriceEffectiveDate
     */
    set salePriceEffectiveDate(salePriceEffectiveDate) {
        this._salePriceEffectiveDate = salePriceEffectiveDate;
    }


    /**
     * @param {String} salePriceEffectiveDate
     */
    set salePriceEffectiveDate(salePriceEffectiveDate) {
        this._salePriceEffectiveDate = salePriceEffectiveDate;
    }

    /**
     * @param {String} itemGroupId
     */
    set itemGroupId(itemGroupId) {
        this._itemGroupId = itemGroupId;
    }

    /**
     * @param {ProductCsv.genderValues} gender
     */
    set gender(gender) {
        this._gender = gender;
    }

    /**
     * @return {String[]} 
     */
    static getFacebookProductPropertyNames() {

        return Object.values(mappingProductToFacebookProduct);
    }


    /**
     * @param {Product} product
     */
    static toFacebookProduct(product) {

        const mapToFbProducto = (fbProduct, [key, value]) => {
            fbProduct[mappingProductToFacebookProduct[key]] = value;
            return fbProduct
        };

        return Object.entries(product).reduce(mapToFbProducto, {});
    }

};
exports.Product = Product;


const mappingProductToFacebookProduct = {
    //required
    _id: "id",
    _title: "title",
    _description: "description",
    _condition: "condition",
    _availability: "availability",
    _price: "price",
    _link: "link",
    _imageLink: "image_link",
    _brand: "brand",

    //optional
    _googleProductCategory: "google_product_category",
    _fbProductCategory: "fb_product_category",
    _quantityToSellOnFacebook: "quantity_to_sell_on_facebook",
    _salePrice: "sale_price",
    _salePriceEffectiveDate: "sale_price_effective_date",
    _itemGroupId: "item_group_id",
    _gender: "gender",
    _color: "color",
    _size: "size",
    _age_group: "age_group",
    _material: "material",
    _pattern: "pattern",
    _shipping: "shipping",
    _shippingWeight: "shipping_weight"
}