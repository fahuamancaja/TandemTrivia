using System.Collections.Generic;

namespace API.Entities
{
    public class MyArray    
    {
        public string Question { get; set; } 
        public List<string> Incorrect { get; set; } 
        public string Correct { get; set; } 
    }
}