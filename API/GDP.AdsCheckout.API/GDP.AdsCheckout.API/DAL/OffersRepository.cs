using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GDP.AdsCheckout.API.DAL
{
  public class OffersRepository
  {

    public IEnumerable<Models.Offer> GetOffers(string customerId)
    {
      return Seeds.offers.Where(_ => _.CustomerId == customerId);
    }

    public Models.Offer GetOffer(string customerId, string offerId)
    {
      return Seeds.offers.FirstOrDefault(_ => _.CustomerId == customerId && _.Id == offerId);
    }

    public Models.Offer GetProductOffer(string customerId, string productId)
    {
      return Seeds.offers.FirstOrDefault(_ => _.CustomerId == customerId && _.ProductId == productId);
    }
  }
}
