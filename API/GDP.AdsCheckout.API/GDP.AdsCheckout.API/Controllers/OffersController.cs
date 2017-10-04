using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GDP.AdsCheckout.API.Controllers
{
  [Route("[controller]")]
  public class OffersController : Controller
  {
    private DAL.OffersRepository offersRepo;

    public OffersController(DAL.OffersRepository offerRepo)
    {
      this.offersRepo = offerRepo;
    }

    [HttpGet]
    public IActionResult GetOffers()
    {
      var customerId = this.GetCustomerId();
      if (string.IsNullOrEmpty(customerId))
        return StatusCode(401);
      else
        return Json(this.offersRepo.GetOffers(customerId));
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public IActionResult GetOffer(string id)
    {
      var customerId = this.GetCustomerId();
      if (string.IsNullOrEmpty(customerId))
        return StatusCode(401);
      else
        return Json(this.offersRepo.GetOffer(customerId, id));
    }
  }
}
