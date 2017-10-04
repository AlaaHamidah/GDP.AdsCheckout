using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GDP.AdsCheckout.API.Models
{
    public class CartItem
    {
        public string ProductId { get; set; }

        public int Quantity { get; set; }

        public double Price { get; set; }
    }
}
