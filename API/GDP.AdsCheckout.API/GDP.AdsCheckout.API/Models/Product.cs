using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GDP.AdsCheckout.API.Models
{
  public class Product
  {
    public string Id { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }

    public double Price { get; set; }

    public Models.Offer Offer { get; set; }

  }
}
