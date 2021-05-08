const sortDates = async (product) => {
  const reviews = product.reviews;
;
  // reviews.sort((a, b) => {
  //   let dateA = new Date(a.reviewDate);
  //   let dateB = new Date(b.reviewDate);
  //   return dateA - dateB;
  // })

  // console.log('sorted dates:', reviews.reverse());

  product.reviews = reviews;
  return product;
}


module.exports.sortDates = sortDates;