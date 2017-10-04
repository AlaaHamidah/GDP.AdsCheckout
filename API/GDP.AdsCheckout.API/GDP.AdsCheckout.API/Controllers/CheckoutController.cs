using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GDP.AdsCheckout.API.Controllers
{
  [Route("[controller]")]
  public class CheckoutController : Controller
  {
    private Services.CheckoutService checkoutService;

    public CheckoutController(Services.CheckoutService checkoutService)
    {
      this.checkoutService = checkoutService;
    }

    [HttpPost]
    public IActionResult Checkout([FromBody]IEnumerable<Models.CartItem> cartItems)
    {

      var customerId = this.GetCustomerId();
      if (string.IsNullOrEmpty(customerId))
        return StatusCode(401);
      else
        return Json(checkoutService.GetCheckout(customerId, cartItems));
    }
  }
}
