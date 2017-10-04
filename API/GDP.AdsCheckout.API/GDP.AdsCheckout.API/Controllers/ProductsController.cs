using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace GDP.AdsCheckout.API.Controllers
{
  [Route("[controller]")]
  public class ProductsController : Controller
  {
    private DAL.ProductsRepository productsRepo;

    public ProductsController(DAL.ProductsRepository productsRepo)
    {
      this.productsRepo = productsRepo;
    }
    
    [HttpGet]
    public IActionResult GetProducts()
    {
      var customerId = this.GetCustomerId();
      if (string.IsNullOrEmpty(customerId))
        return StatusCode(401);
      else
        return Json(this.productsRepo.GetProducts());
    }
    
    [HttpGet("{id}")]
    public IActionResult GetProduct(string id)
    {
      var customerId = this.GetCustomerId();
      if (string.IsNullOrEmpty(customerId))
        return StatusCode(401);
      else
        return Json(this.productsRepo.GetProduct(id));
    }

    [HttpGet("customer")]
    public IActionResult GetProductsByCustomerId()
    {
      var customerId = this.GetCustomerId();
      if (string.IsNullOrEmpty(customerId))
        return StatusCode(401);
      else
        return Json(this.productsRepo.GetProductsByCustomerId(customerId));
    }


    [HttpGet("customer/{id}")]
    public IActionResult GetProductsByCustomerId(string id)
    {
      var customerId = this.GetCustomerId();
      if (string.IsNullOrEmpty(customerId))
        return StatusCode(401);
      else
        return Json(this.productsRepo.GetProductByCustomerId(customerId, id));
    }

  }
}
