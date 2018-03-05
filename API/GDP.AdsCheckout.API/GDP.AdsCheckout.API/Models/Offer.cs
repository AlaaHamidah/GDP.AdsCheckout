using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GDP.AdsCheckout.API.Models
{
    public class Offer
    {
        public string Id { get; set; }

        public string CustomerId { get; set;  }

        public string AdId { get; set; }

        public string OfferType { get; set; }

        public string Description { get; set; }

        public int MinimumPurchase { get; set; }

        public double NewPrice { get; set; }

        public int FreeItem { get; set; }
    }
}
