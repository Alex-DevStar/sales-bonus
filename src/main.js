/**
 * Функция для расчета выручки
 * @param purchase запись о покупке
 * @param _product карточка товара
 * @returns {number}
 */
function calculateSimpleRevenue(purchase, _product) {
   // @TODO: Расчет выручки от операции
      const { discount, sale_price, quantity } = purchase;

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
  console.log("Некорректные данные о продажах");
}

 if (
  data.sellers === undefined ||
  !Array.isArray(data.sellers) ||
  data.sellers.length === 0
) {
  console.log("Некорректные данные о продавцах");
}

 if (
  data.products === undefined ||
  !Array.isArray(data.products) ||
  data.products.length === 0
) {
  console.log("Некорректные данные о товарах");
}

    // @TODO: Проверка наличия опций


if (options === undefined || options === null) {
  console.log("В качестве функции ничего не передано")
}

if (typeof options.calculateRevenue !== 'function') {
  console.log("Переданные значения в расчет доходов не являются функцией")
}

if (typeof options.calculateBonus !== 'function') {
  console.log("Переданные значения в расчет бонусов не являются функцией")
}

    // @TODO: Подготовка промежуточных данных для сбора статистики

    // @TODO: Индексация продавцов и товаров для быстрого доступа

    // @TODO: Расчет выручки и прибыли для каждого продавца

    // @TODO: Сортировка продавцов по прибыли

    // @TODO: Назначение премий на основе ранжирования

    // @TODO: Подготовка итоговой коллекции с нужными полями
    const sellersMap = new Map();
data.sellers.forEach((seller) => {
  sellersMap.set(seller.id,
    {
    id: seller.id,
    name: `${seller.first_name} ${seller.last_name}`,
    revenue: 0,
    profit: 0,
    sales_count: 0,
    products_sold: {}
  });
});
