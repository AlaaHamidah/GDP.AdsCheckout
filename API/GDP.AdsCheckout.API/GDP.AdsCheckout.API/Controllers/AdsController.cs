using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace GDP.AdsCheckout.API.Controllers
{
  [Route("[controller]")]
  public class AdsController : Controller
  {
    private DAL.AdsRepository adsRepo;

    public AdsController(DAL.AdsRepository adsRepo)
    {
      this.adsRepo = adsRepo;
    }
    
    [HttpGet]
    public IActionResult GetAds()
    {
      var customerId = this.GetCustomerId();
      if (string.IsNullOrEmpty(customerId))
        return StatusCode(401);
      else
        return Json(this.adsRepo.GetAds());
    }
    
    [HttpGet("{id}")]
    public IActionResult GetAd(string id)
    {
      var customerId = this.GetCustomerId();
      if (string.IsNullOrEmpty(customerId))
        return StatusCode(401);
      else
        return Json(this.adsRepo.GetAd(id));
    }

    [HttpGet("customer")]
    public IActionResult GetAdsByCustomerId()
    {
      var customerId = this.GetCustomerId();
      if (string.IsNullOrEmpty(customerId))
        return StatusCode(401);
      else
        return Json(this.adsRepo.GetAdsByCustomerId(customerId));
    }


    [HttpGet("customer/{id}")]
    public IActionResult GetAdsByCustomerId(string id)
    {
      var customerId = this.GetCustomerId();
      if (string.IsNullOrEmpty(customerId))
        return StatusCode(401);
      else
        return Json(this.adsRepo.GetAdByCustomerId(customerId, id));
    }

  }
}
