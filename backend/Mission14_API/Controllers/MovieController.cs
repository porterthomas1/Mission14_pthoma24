using Microsoft.AspNetCore.Mvc;
using Mission14_API.Data;

namespace Mission14_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MoviesDbContext context;
        public MovieController(MoviesDbContext temp) {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            return context.Movies
                .Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Title)
                .ToArray();
        }
    }
}
