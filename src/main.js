/**
 * Функция для расчета выручки
 * @param purchase запись о покупке
 * @param _product карточка товара
 * @returns {number}
 */
function calculateSimpleRevenue(purchase, _product) {
   // @TODO: Расчет выручки от операции
      const { discount, sale_price, quantity } = purchase;
      return sale_price * quantity * (1 - discount / 100);
}

/**
 * Функция для расчета бонусов
 * @param index порядковый номер в отсортированном массиве
 * @param total общее число продавцов
 * @param seller карточка продавца
 * @returns {number}
 */

const total = data.sellers.length;

function calculateBonusByProfit(index, total, seller) {
    // @TODO: Расчет бонуса от позиции в рейтинге
      const { profit } = seller;

}

/**
 * Функция для анализа данных продаж
 * @param data
 * @param options
 * @returns {{revenue, top_products, bonus, name, sales_count, profit, seller_id}[]}
 */
function analyzeSalesData(data, options) {
     const { calculateRevenue, calculateBonus } = options; // Сюда передадим функции для расчётов

    // @TODO: Проверка входных данных

    if (
  data.purchase_records === undefined ||
  !Array.isArray(data.purchase_records) ||
  data.purchase_records.length === 0
) {
  throw new Error("Некорректные данные о продажах");
}

 if (
  data.sellers === undefined ||
  !Array.isArray(data.sellers) ||
  data.sellers.length === 0
) {
  throw new Error("Некорректные данные о продавцах");
}

 if (
  data.products === undefined ||
  !Array.isArray(data.products) ||
  data.products.length === 0
) {
  throw new Error("Некорректные данные о товарах");
}

    // @TODO: Проверка наличия опций

if (options === undefined || options === null) {
  throw new Error("В качестве функции ничего не передано")
}

if (typeof options.calculateRevenue !== 'function') {
  throw new Error("Переданные значения в расчет доходов не являются функцией")
}

if (typeof options.calculateBonus !== 'function') {
  throw new Error("Переданные значения в расчет бонусов не являются функцией")
}

    // @TODO: Подготовка промежуточных данных для сбора статистики
  const sellerStats = data.sellers.map((seller) => ({
  id: seller.id,
  name: `${seller.first_name} ${seller.last_name}`,
  revenue: 0,
  profit: 0,
  sales_count: 0,
  products_sold: {}
}));
    // @TODO: Индексация продавцов и товаров для быстрого доступа

  const sellerIndex = sellerStats.reduce((acc, seller) => {
  acc[seller.id] = seller;
  return acc;
}, {});


const productIndex = data.products.reduce((acc, product) => {
acc[product.sku] = product;
return acc;
}, {});


data.purchase_records.forEach(record => { // Чек
        const seller = sellerIndex[record.seller_id]; // Продавец
          seller.sales_count++;            // Увеличить количество продаж
          seller.revenue+= record.total_amount;          // Увеличить общую сумму всех продаж

        // Расчёт прибыли для каждого товара
        record.items.forEach(item => {
            const product = productIndex[item.sku]; // Товар
           const cost = item.purchase_price * item.quanity;// Посчитать себестоимость (cost) товара как product.purchase_price, умноженную на количество товаров из чека
            const revenue = calculateSimpleRevenue(item, product)// Посчитать выручку (revenue) с учётом скидки через функцию calculateRevenue
            // Посчитать прибыль: выручка минус себестоимость
        // Увеличить общую накопленную прибыль (profit) у продавца

            // Учёт количества проданных товаров
            if (!seller.products_sold[item.sku]) {
                seller.products_sold[item.sku] = 0;
            }
            seller.products_sold[item.sku] += item.quanity;
            // По артикулу товара увеличить его проданное количество у продавца
        });
 });

    // @TODO: Расчет выручки и прибыли для каждого продавца

    // @TODO: Сортировка продавцов по прибыли

    // @TODO: Назначение премий на основе ранжирования

    // @TODO: Подготовка итоговой коллекции с нужными полями

