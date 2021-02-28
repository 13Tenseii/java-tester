package tenseii.testercore.entity;

import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "user")
data class User(
        @Id val id: Long? = null,
        val name: String? = null,
        val role: Int? = null
) {}
