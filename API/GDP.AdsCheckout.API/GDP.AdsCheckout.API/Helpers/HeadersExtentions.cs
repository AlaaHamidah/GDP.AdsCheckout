using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GDP.AdsCheckout.API.Controllers
{
    public static class HeadersExtentions
  {
    public static string GetCustomerId(this Microsoft.AspNetCore.Mvc.Controller controller)
    {
      Microsoft.Extensions.Primitives.StringValues customerId = Microsoft.Extensions.Primitives.StringValues.Empty;
      if (!controller.HttpContext.Request.Headers.TryGetValue("customerId", out customerId))
        return string.Empty;
      return customerId.ToString().ToLower();
    }
  }
}
