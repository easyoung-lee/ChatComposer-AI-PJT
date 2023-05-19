package com.a504.chatcomposer.music.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
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
@Table(name = "prompt")
public class Prompt {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "prompt_id", nullable = false)
	private Long id;

	@NotNull
	@OneToOne(orphanRemoval = true)
	@JoinColumn(name = "track_id")
	private Track track;

	@Column(name = "request_description", columnDefinition = "TEXT")
	private String requestDescription;

	@Column(name = "midi_description", columnDefinition = "TEXT")
	private String midiDescription;

	@NotNull
	@Column(name = "created_at")
	private LocalDateTime createdAt;

	/* 연관관계 메서드 설정 */
	public void setTrack(Track track) {
		this.track = track;
		track.setPrompt(this);
	}
}
