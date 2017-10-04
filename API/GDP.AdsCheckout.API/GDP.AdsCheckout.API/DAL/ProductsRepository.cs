using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GDP.AdsCheckout.API.DAL
{
  public class ProductsRepository
  {

    public IEnumerable<Models.Product> GetProducts()
    {
      return Seeds.products;
    }

    public Models.Product GetProduct(string Id)
    {
      return Seeds.products.FirstOrDefault(_ => _.Id == Id);
    }

    public IEnumerable<Models.Product> GetProductsByCustomerId(string customerId)
    {
      return Seeds.products.Select(a => new Models.Product()
      {
        Id = a.Id,
        Name = a.Name,
        Description = a.Description,
        Price = a.Price,
        Offer = Seeds.offers.FirstOrDefault(b => b.ProductId == a.Id && b.CustomerId == customerId)
      }).ToList();
    }

    public Models.Product GetProductByCustomerId(string customerId, string Id)
    {
      return Seeds.products.Where(_ => _.Id == Id).Select(a => new Models.Product()
      {
        Id = a.Id,
        Name = a.Name,
        Description = a.Description,
        Price = a.Price,
        Offer = Seeds.offers.FirstOrDefault(b => b.ProductId == a.Id && b.CustomerId == customerId)
      }).FirstOrDefault();
    }
  }
}
