using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TesWebApiandPipeline.Models.CustomObject
{
    public class UserObject
    {
        public int id { get; set; }
        public string user_name { get; set; }
        public string full_name { get; set; }
        public string address { get; set; }
        public string phone_number { get; set; }
    }
}