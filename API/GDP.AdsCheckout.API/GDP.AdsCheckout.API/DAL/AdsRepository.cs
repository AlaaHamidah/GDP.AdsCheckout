using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GDP.AdsCheckout.API.DAL
{
  public class AdsRepository
  {

    public IEnumerable<Models.Ad> GetAds()
    {
      return Seeds.ads;
    }

    public Models.Ad GetAd(string Id)
    {
      return Seeds.ads.FirstOrDefault(_ => _.Id == Id);
    }

    public IEnumerable<Models.Ad> GetAdsByCustomerId(string customerId)
    {
      return Seeds.ads.Select(a => new Models.Ad()
      {
        Id = a.Id,
        Name = a.Name,
        Description = a.Description,
        Price = a.Price,
        Offer = Seeds.offers.FirstOrDefault(b => b.AdId == a.Id && b.CustomerId == customerId)
      }).ToList();
    }

    public Models.Ad GetAdByCustomerId(string customerId, string Id)
    {
      return Seeds.ads.Where(_ => _.Id == Id).Select(a => new Models.Ad()
      {
        Id = a.Id,
        Name = a.Name,
        Description = a.Description,
        Price = a.Price,
        Offer = Seeds.offers.FirstOrDefault(b => b.AdId == a.Id && b.CustomerId == customerId)
      }).FirstOrDefault();
    }
  }
}
