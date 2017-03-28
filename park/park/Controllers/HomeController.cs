using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace park.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult Subscription()
        {
            ViewBag.Title = "Subscription Page";
            return View();
        }

        public ActionResult CarsToFine()
        {
            ViewBag.Title = "Cars to Fine";
            return View();
        }

        public ActionResult AddZone()
        {
            ViewBag.Title = "Add Zone";
            return View();
        }
    }
}
