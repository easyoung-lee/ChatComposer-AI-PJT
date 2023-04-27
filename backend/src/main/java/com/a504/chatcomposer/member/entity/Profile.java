package com.a504.chatcomposer.member.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "profile")
public class Profile {

	@Id
	@NotNull
	private Long memberId;

	@NotNull
	@MapsId    // Profile의 memberId와 매핑 (1:1 식별관계)
	@OneToOne(orphanRemoval = true)
	@JoinColumn(name = "member_id")
	private Member member;

}
