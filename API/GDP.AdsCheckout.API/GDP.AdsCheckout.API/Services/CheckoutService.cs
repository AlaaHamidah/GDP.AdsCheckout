using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GDP.AdsCheckout.API.Services
{
  public class CheckoutService
  {
    DAL.OffersRepository offersRepo = new DAL.OffersRepository();
    double totalPrice = 0;
    double totalPriceAfterDiscount = 0;

    public (double before, double after) GetCheckout(string customerId, IEnumerable<Models.CartItem> cartItems)
    {
      foreach (Models.CartItem item in cartItems)
      {
        this.totalPrice += item.Quantity * item.Price;

        var offer = offersRepo.GetProductOffer(customerId, item.ProductId);
        //has offer and offer rules are verified
        if (offer != null && offer.MinimumPurchase <= item.Quantity)
        {
          switch (offer.OfferType)
          {
            case "BuyNFreeM":
              this.totalPriceAfterDiscount += Math.Ceiling((double)item.Quantity / offer.MinimumPurchase * (offer.MinimumPurchase - offer.FreeItem)) * item.Price;
              break;

            case "DiscountForN":
              this.totalPriceAfterDiscount += item.Quantity * offer.NewPrice;
              break;
          }
        }
        // calculate as orginal price 
        else this.totalPriceAfterDiscount += item.Quantity * item.Price;

      }
      return (totalPrice , totalPriceAfterDiscount );
    }

  }

}
