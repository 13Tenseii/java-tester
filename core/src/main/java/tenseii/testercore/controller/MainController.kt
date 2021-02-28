package tenseii.testercore.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController
import tenseii.testercore.entity.User
import tenseii.testercore.repo.UserRepo

@RestController
@RequestMapping("api")
class MainController(@Autowired private val userRepo: UserRepo) {

    @ResponseBody
    @GetMapping("/users")
    fun getUsers(): List<User> {
        return userRepo.allUsers;
    }
}