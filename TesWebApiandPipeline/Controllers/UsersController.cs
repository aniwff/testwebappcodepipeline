using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using TesWebApiandPipeline.Models.CustomObject;

namespace TesWebApiandPipeline.Controllers
{
    public class UsersController : ApiController
    {
        // GET: api/Users
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Users/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Users
        public IHttpActionResult Post(UserObject userObject)
        {
            var m = new
            {
                userName = userObject.user_name,
                fullName = userObject.full_name,
                address = userObject.address,
                phoneNumber = userObject.phone_number
            };

            return Ok(m);

        }

        // PUT: api/Users/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Users/5
        public void Delete(int id)
        {
        }
    }
}
