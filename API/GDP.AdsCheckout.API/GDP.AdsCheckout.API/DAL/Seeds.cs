using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GDP.AdsCheckout.API.DAL
{

  internal static class Seeds
  {
    internal static List<Models.Ad> ads = new List<Models.Ad> {
        new Models.Ad(){ Id = "classic",Name="Classic Ad", Description="Offers the most basic level of advertisement", Price=269.99 },
        new Models.Ad(){ Id = "standout",Name="Standout Ad", Description="Allows advertisers to use a company logo and use a longer presentation text", Price=322.99 } ,
        new Models.Ad(){ Id = "premium",Name="Primium Ad", Description="Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility", Price=394.99 }
    };


    internal static List<Models.Offer> offers = new List<Models.Offer> {
         new Models.Offer() { Id = Guid.NewGuid().ToString() , CustomerId="unilever", AdId = "classic" , Description="Gets a 3 for 2 deals on Classic Ads", OfferType="BuyNFreeM" , MinimumPurchase=3 , FreeItem = 1 },
         new Models.Offer() { Id = Guid.NewGuid().ToString() , CustomerId="apple",  AdId = "standout", Description="Gets a discount on Standout Ads where the price drops to $299.99 per ad", OfferType="DiscountForN" , MinimumPurchase=1 , NewPrice = 299.99 },
         new Models.Offer() { Id = Guid.NewGuid().ToString() , CustomerId="nike",  AdId = "premium", Description="Gets a discount on Premium Ads where 4 or more are purchased. The price drops to $379.99 per ad", OfferType = "DiscountForN" , MinimumPurchase = 4 , NewPrice = 379.99},
         new Models.Offer() { Id = Guid.NewGuid().ToString() , CustomerId="ford", AdId ="classic", Description="Gets a 5 for 4 deal on Classic Ads", OfferType="BuyNFreeM" , MinimumPurchase=5 , FreeItem = 1 },
         new Models.Offer() { Id = Guid.NewGuid().ToString() , CustomerId="ford", AdId ="standout", Description="Gets a discount on Standout Ads where the price drops to $309.99 per ad", OfferType="DiscountForN" , MinimumPurchase = 1 , NewPrice = 309.99 },
         new Models.Offer() { Id = Guid.NewGuid().ToString() , CustomerId="ford",  AdId ="premium", Description="Gets a discount on Premium Ads when 3 or more are purchased. The price drops to $389.99 per ad", OfferType = "DiscountForN" , MinimumPurchase = 3 , NewPrice = 389.99 }
   };
  };
}
